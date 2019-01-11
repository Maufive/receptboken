import { keyframes } from "styled-components";

export const slideIn = keyframes`
  0% {
        opacity: 0;
        transform: translateY(-80px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }
`;

export const slideUp = keyframes`
  0% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
      opacity: 1;
      transform: translateY(0px)
    }
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const slideInOut = keyframes`
  0% {
        opacity: 0;
        transform: translateY(-80px);
    }

    4% {
        opacity: 1;
        transform: translateY(0);
    }
    
    96% {
        opacity: 1;
        transform: translateY(0);
    }
    
    100% {
      opacity: 0;
      transform: translateY(-80px);
    }
  }
`;

export const bounce = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: translateY(0);
  }
  
  50% {
    transform: translateY(-5px);
  }
`;

export const slideRight = keyframes`
  0% {
    -webkit-transform: translateX(-80px);
            transform: translateX(-80px);
            opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1;
  }
`;

export const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 0;
  }
  
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
  }
`;

export const smoothfade = keyframes`

`;

// animation: smoothfade 1.2 ease 2.2s 1 normal forwards running;
