const { widget } = figma;
const { AutoLayout, Image, Frame, useSyncedState, Input, Text } = widget;

const fontPhotoUrls = [
  {
    key: "roboto",
    src: "https://typographica.org/wp-content/uploads/2011/10/Roboto-weights.png",
  },
  {
    key: "nimbus",
    src: "https://st.1001fonts.net/img/illustrations/n/i/nimbus-sans-l-font-1-big.png",
  },
  {
    key: "aspergit",
    src: "https://st.1001fonts.net/img/illustrations/a/s/aspergit-font-2-big.png",
  },

  {
    key: "reverie",
    src: "https://st.1001fonts.net/img/illustrations/a/s/aspergit-font-1-big.png",
  },
  {
    key: "texgyreheros",
    src: "https://st.1001fonts.net/img/illustrations/t/e/texgyreheros-font-1-big.png",
  },
]

function ListExample() {
  const [font, setFont] = useSyncedState("font", "");
  const [selectedIndex, setSelectedIndex] = useSyncedState("selectedIndex", 1); // Use -1 to indicate no selection

  {
    fontPhotoUrls.map((url) => (
      <Image key={url.key} src={url.src} width={100} height={100} />
    ));
  }
  return (
    <AutoLayout direction="vertical" spacing={10} width={600} height={600}>
      <Input
        value={font}
        placeholder="Type name"
        onTextEditEnd={(e) => {
          setFont(e.characters);
          const index = fontPhotoUrls.findIndex(
            (url) => url.key.toString() === e.characters
          );
          setSelectedIndex(index);
        }}
        fontSize={16}
        fill="#7f1d1d"
        width={200}
        inputFrameProps={{
          fill: "#fee2e2",
          stroke: "#b91c1c",
          cornerRadius: 16,
          padding: 20,
        }}
        inputBehavior="wrap"
      />
      {selectedIndex >= 0 && (
        <Frame
          fill={{
            type: "image",
            src: fontPhotoUrls[selectedIndex].src,
          }}
          width={200}
          height={100}
        />
      )}

      <Text fill="#000000"> Recommended Fonts </Text>

      <AutoLayout direction="horizontal" spacing={10} width="fill-parent">
        {fontPhotoUrls.map((url) => (
          <Image key={url.key} src={url.src} width={200} height={100} />
        ))}
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(ListExample);
