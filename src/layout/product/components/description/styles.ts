import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '0 1rem',
  
  strong: {
    display: 'inline-block',
    marginBottom: '1rem'
  }
})

export const HiddenView = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",

  variants: {
    hidden: {
      true: {
        "&::after": {
          content: "",
          height: "35px",
          width: "100%",
          background: "linear-gradient(180deg,hsla(0,0%,100%,0) -11.81%,hsla(0,0%,100%,.91) 51.43%)",
          position: "absolute",
          bottom: 0,
          left: 0,
        },
        height: "3.3125rem",
      },
    },
  },
});

export const ShowMoreView = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "1.2rem",
});