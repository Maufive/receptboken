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
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
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
