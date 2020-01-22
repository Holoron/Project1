/**
 * Created by 1 on 22.01.2020.
 */
{
    window.onclick = function (event) {
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 7; j++) {
                if (event.target == document.getElementsByName("menu")[i]|| event.target == document.getElementsByClassName("menutext")[i] ) {
                    document.getElementsByName("menu")[j].style.backgroundColor = "#03499E";
                    document.getElementsByClassName("menutext")[j].style.color = "white";
                }
            }
            if (event.target == document.getElementsByName("menu")[i] || event.target == document.getElementsByClassName("menutext")[i]) {
                document.getElementsByName("menu")[i].style.backgroundColor = "#F7F7F7";
                document.getElementsByClassName("menutext")[i].style.color = "#129FDF";
            }
        }
    }
}