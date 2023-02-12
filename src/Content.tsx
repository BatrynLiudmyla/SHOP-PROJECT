type ContentProps = {
  text1: string
  text2: string
  year: number
}
    export const Content = (props: ContentProps) => {
      return (
          <>
              <p style={{
                color:`white`,
                background:`green`,
                padding:`15px`,
              }}

              >{props.text1}</p>
              <p>{props.text2}</p>
              <div>Year: {props.year}</div>
          </>
      )
  }
  


// export default Content