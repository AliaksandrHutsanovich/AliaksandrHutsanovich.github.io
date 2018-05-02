function event_listeners() {

    let string_array = ["In publishing and graphic design, lorem ipsum is a placeholder text commonly" +
    "used to demonstrate the visual form of a document without relying on meaningful" +
    "content (also called greeking). Replacing the actual content with placeholder" +
    "text allows designers to design the form of the content before the content" +
    "itself has been produced.",
        "The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum," +
        "a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make" +
        "it nonsensical, improper Latin.",
        "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s" +
        "or earlier, when it was popularized by advertisements for Letraset transfer sheets." +
        "It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which" +
        "employed it in graphics and word-processing templates for its desktop publishing program PageMaker.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
        "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
        "deserunt mollit anim id est laborum.",
        "Occasionally used by printers as dummy texts since the 1500s, use of Lorem ipsum passages was first" +
        "popularized on Letraset dry-transfer sheets from the early 1970s, which were produced to be used by" +
        "graphic designers for filler text.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n" +
        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
        "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n" +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
        "deserunt mollit anim id est laborum."];

    let i = 0;
    let text = document.querySelector(".component__slider__item>p");
    let textNode = document.createTextNode(string_array[0]);
    text.appendChild(textNode);

    let indicator = document.getElementsByClassName("slider-indicators")[0].childNodes;

    let indicator_transform = [];

    for (let j = 0; j < indicator.length; j++) {
        if ((j + 1) % 2 == 0)
            indicator_transform.push(indicator[j]);
    }
    indicator = indicator_transform;
    indicator[i].style.backgroundColor = "red";

    let left_button = document.getElementsByClassName("button-left")[0];
    let right_button = document.getElementsByClassName("button-right")[0];

    function press_left_switcher(e) {
        indicator[i].style.backgroundColor = "grey";
        i += 1;
        i = (i > 5) ? 0 : i;
        indicator[i].style.backgroundColor = "red";
        text.removeChild(textNode);
        textNode = document.createTextNode(string_array[i]);
        text.appendChild(textNode);
    }

    function press_right_switcher(e) {
        indicator[i].style.backgroundColor = "grey";
        i -= 1;
        i = (i < 0) ? 5 : i;
        indicator[i].style.backgroundColor = "red";
        text.removeChild(textNode);
        textNode = document.createTextNode(string_array[i]);
        text.appendChild(textNode);
    }

    left_button.addEventListener("click", press_left_switcher);

    right_button.addEventListener("click", press_right_switcher);

    function press_button(e) {
        if (e.keyCode == 37) {
            press_right_switcher(e);
        }
        if (e.keyCode == 39) {
            press_left_switcher(e);
        }
    }

    addEventListener("keydown", press_button);

    let closing_button=document.getElementsByClassName("component__closer")[0];

    function window_closing(e) {
        let closing_window=document.getElementsByClassName("component")[0];
        document.body.removeChild(closing_window);
    }

    closing_button.addEventListener("click", window_closing);

    let checkbox=document.querySelector('.checkbox_add_localstorage');
    console.log(checkbox);
    function add_to_local_storage(e) {
        let enabled = e.target.checked;
        console.log(enabled);
        localStorage.setItem("closed", enabled);
    }

    checkbox.addEventListener("click", add_to_local_storage);
}