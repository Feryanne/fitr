new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "cat couple.jpg",
          img2: "cat couple2.jpg",
          img3: "cat couple3.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "cat cute.jpg",
          img2: "cat cute 2.jpg",
          img3: "cat cute 3.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "cat baby2.jpg",
          img2: "cat baby.jpg",
          img3: "cat baby3.jpg",
          title: "BABIES",
          isOpen: false,
        },
        {
          img1: "cat sleep.jpg",
          img2: "cat sleep2.jpg",
          img3: "cat sleep 3.jpg",
          title: "SLEEP",
          isOpen: false,
        },
        {
          img1: "CAT HERO1.jpg",
          img2: "cat hero2.jpg",
          img3: "cat hero3.jpg",
          title: "HERO",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
