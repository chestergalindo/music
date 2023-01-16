import { Text } from "@nextui-org/react";

export const NotFound = () => (
  <div style={{display: "grid", placeContent: "center", height: "80vh"}}>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
        height: "80px",
        paddingTop: "20px",
      }}
      weight="bold"
    >
      error
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $purple600 -20%, $pink600 100%",
        height: "80px",
        paddingTop: "20px",
      }}
      weight="bold"
    >
      404
    </Text>
    <Text
      h1
      size={60}
      css={{
        textGradient: "45deg, $yellow600 -20%, $red600 100%",
        height: "80px",
        paddingTop: "20px",
      }}
      weight="bold"
    >
      Pagina no encontrada
    </Text>
  </div>
)