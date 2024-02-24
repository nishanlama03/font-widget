"use strict";
const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, useSyncedState, Input } = widget;
//^hooks
//useSyncedState - saving information
function Widget() {
    const [open, setOpen] = useSyncedState("open", true); //boolean 
    //open = true, whether or not its open
    //setOpen - using it change that value
    return (figma.widget.h(Frame, { name: "Widget", overflow: "visible", width: 50, height: 50 },
        figma.widget.h(AutoLayout, { name: "Textbox", effect: {
                type: "drop-shadow",
                color: "#00000040",
                offset: {
                    x: 0,
                    y: 5,
                },
                blur: 15,
                showShadowBehindNode: false,
            }, x: 50, y: 50, fill: "#FFF", stroke: "#F33", cornerRadius: 5, strokeWidth: 5, overflow: "visible", spacing: 10, padding: 20, width: 400, horizontalAlignItems: "center", verticalAlignItems: "center" },
            figma.widget.h(Text, { name: "This should be text", fill: "#000", width: "fill-parent", fontFamily: "Inter" }, "This would be an example of the text")),
        figma.widget.h(Rectangle, { name: "Dot Active", effect: {
                type: "drop-shadow",
                color: "#00000040",
                offset: {
                    x: 0,
                    y: 5,
                },
                blur: 15,
                showShadowBehindNode: false,
            }, fill: "#F33", hoverStyle: { fill: "#fff" }, cornerRadius: {
                topLeft: 50,
                topRight: 50,
                bottomRight: open ? 10 : 50,
                bottomLeft: 50,
            }, onClick: () => {
                setOpen(!open); //when clicked its the opposite of open
            }, width: 50, height: 50 })));
}
widget.register(Widget);
