<template>
  <section id="music">
    <song-list
      :beers="beers"
    />
  </section>
</template>

<script>
import SongList from "@/components/BeersPage";
import { mapState } from "vuex";

export default {
  name: "music",
  data() {
    return {
      audioElement: null
    };
  },
  computed: {
    ...mapState(["songs", "currentSong"])
  },
  methods: {
    handlePlay: function(payload) {
      if (this.audioElement == null) {
        this.audioElement = new Audio(payload.music_url);
        this.audioElement.play();
      } else {
        if (payload === this.currentSong) {
          if (this.audioElement.paused) {
            this.audioElement.play();
          } else {
            this.audioElement.pause();
          }
        } else {
          this.audioElement.src = payload.music_url;
          this.audioElement.play();
        }
      }
      this.$store.dispatch("changeSong", payload);

      this.audioElement.addEventListener("ended", () => {
        this.$store.dispatch("changeSong", null);
        this.audioElement = null;
      });
    },
    handleDelete: function(payload) {
      this.$store.dispatch("deleteSong", payload);
    }
  },
  created() {
    this.$store.dispatch("fetchSongs");
  },
  beforeDestroy() {
    if (this.currentSong) {
      this.audioElement.pause();
    }
  },
  components: {
    CurrentSong,
    SongList
  }
};
</script>
