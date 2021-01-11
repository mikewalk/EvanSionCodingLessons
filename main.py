def on_button_pressed_a():
    global i
    directions[0 % 8].show_image(0)
    i += 1
    if i >= 8:
        i = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global i
    directions[i % 8].show_image(0)
    i += -1
    if i < 0:
        i = 8
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
directions: List[Image] = []
myImage = 0
directions = [images.arrow_image(ArrowNames.NORTH),
    images.arrow_image(ArrowNames.NORTH_EAST),
    images.arrow_image(ArrowNames.EAST),
    images.arrow_image(ArrowNames.SOUTH_EAST),
    images.arrow_image(ArrowNames.SOUTH),
    images.arrow_image(ArrowNames.SOUTH_WEST),
    images.arrow_image(ArrowNames.WEST),
    images.arrow_image(ArrowNames.NORTH_WEST)]