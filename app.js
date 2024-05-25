class Cube {
    height = " ";

    set_height() {
        this.height = "30sm";
    }
    get_height() {
        console.log(this.height);
    }

    width = " ";

    set_width() {
        this.width = "40sm";
    }
    get_width() {
        console.log(this.width);
    }

    length = " ";

    set_length() {
        this.length = "50sm";
    }
    get_length() {
        console.log(this.length);
    }
}

var object = new Cube();
object.set_height();
object.set_width();
object.set_length();
document.write(object.height + (", "));
document.write(object.width + (", "));
document.write(object.length + ("."));