const videoHandleTransform =
  (elements: HTMLVideoElement[], idx: number) => () => {
    /**
     * idx 0 video done -> idx 1 video play
     * idx === 0
     * remove
     * 0 -> type1
     * 1 -> type2
     * 2 -> type0
     * add
     * 0 -> type0
     * 1 -> type1
     * 2 -> type2
     *
     * idx 1 video done -> idx 2 video play
     * idx === 1
     * remove
     * 0 -> type0
     * 1 -> type1
     * 2 -> type2
     * add
     * 0 -> type2
     * 1 -> type0
     * 2 -> type1
     *
     * idx 2 video done -> idx 0 video play
     * idx === 2
     * remove
     * 0 -> type2
     * 1 -> type0
     * 2 -> type1
     * add
     * 0 -> type1
     * 1 -> type2
     * 2 -> type0
     */
    const removeType = {
      video0: idx ? (idx === 1 ? 0 : 2) : 1,
      video1: 2 - idx,
      video2: idx ? (idx === 1 ? 2 : 1) : 0,
    };

    const addType = {
      video0: idx ? (idx === 1 ? 2 : 1) : 0,
      video1: idx ? (idx === 1 ? 0 : 2) : 1,
      video2: 2 - idx,
    };

    elements[0].parentElement?.classList.remove(`type${removeType.video0}`);
    elements[1].parentElement?.classList.remove(`type${removeType.video1}`);
    elements[2].parentElement?.classList.remove(`type${removeType.video2}`);

    elements[0].parentElement?.classList.add(`type${addType.video0}`);
    elements[1].parentElement?.classList.add(`type${addType.video1}`);
    elements[2].parentElement?.classList.add(`type${addType.video2}`);

    const playVideoIdx = idx === 2 ? 0 : idx + 1;
    elements[idx].currentTime = 0;
    elements[playVideoIdx].play();
  };

export default videoHandleTransform;
