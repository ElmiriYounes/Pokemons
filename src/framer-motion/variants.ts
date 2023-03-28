export const variantBounce = {
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 8,
    },
  },
  exit: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 8,
    },
  },
};

export const variantRotateMe = {
  scaling: {
    x: [-10, 10, -10],
    transition: { repeat: Infinity, duration: 4 },
  },
};

export const variantPulse = {
  pulse: {
    opacity: [0.9, 0.3, 0.9],
    transition: { repeat: Infinity, duration: 1.5 },
  },
};

export const variantModal = {
  open: {
    y: 0,
    transition: { ease: "easeOut", duration: 1 },
  },
  close: {
    y: "100%",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const variantHamburgerClose = {
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.1 },
  },
  hidden: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const variantScrollToTop = {
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
    zIndex: 999,
  },
  hidden: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
    zIndex: -1,
  },
};
