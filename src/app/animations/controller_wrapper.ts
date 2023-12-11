import { HTMLMotionProps, Variants } from "framer-motion"

export const animations: Record<string, Variants> = {
  top: {
    initial: {
      opacity: 0,
      y: "-50%",
      pointerEvents: 'none',
    },
    animate: {
      opacity: 1,
      y: 0,
      pointerEvents: 'all',
    },
    exit: {
      opacity: 0,
      y: "-50%",
      pointerEvents: 'none',
    }
  },
  bottom: {
    initial: {
      opacity: 0,
      y: "50%",
      pointerEvents: 'none',
    },
    animate: {
      opacity: 1,
      y: 0,
      pointerEvents: 'all',
    },
    exit: {
      opacity: 0,
      y: "50%",
      pointerEvents: 'none',
    }
  },
  left: {
    initial: {
      opacity: 0,
      x: "-50%",
      pointerEvents: 'none',
    },
    animate: {
      opacity: 1,
      x: 0,
      pointerEvents: 'all',
    },
    exit: {
      opacity: 0,
      x: "-50%",
      pointerEvents: 'none',
    }
  },
  right: {
    initial: {
      opacity: 0,
      x: "50%",
      pointerEvents: 'none',
    },
    animate: {
      opacity: 1,
      x: 0,
      pointerEvents: 'all',
    },
    exit: {
      opacity: 0,
      x: "50%",
      pointerEvents: 'none',
    }
  }
}

export const modal_animation: Variants = {
  initial: {
    opacity: 0,
    x: "100%",
    pointerEvents: 'none',
  },
  animate: {
    opacity: 1,
    x: 0,
    pointerEvents: 'all',
  },
  exit: {
    opacity: 0,
    x: "100%",
    pointerEvents: 'none',
  }
}

export const transition: HTMLMotionProps<'div'>['transition'] = {
  duration: 0.2,
}