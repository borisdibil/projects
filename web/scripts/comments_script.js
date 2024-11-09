function Upload_Comment() {
    let comment_paragraph = document.createElement("p");
    let nick_background = document.createElement("a");
    nick_background.style.backgroundColor = "mediumpurple";
    nick_background.style.marginRight = "20px";
    let pies = document.createTextNode("@");
    let nick = document.getElementById("nickname").value;
    let nick1 = document.createTextNode(nick);
    let space = document.createTextNode(" ");
    let comm = document.getElementById("your_comment").value;
    let comm1 = document.createTextNode(comm);
    nick_background.appendChild(pies);
    nick_background.appendChild(nick1);
    comment_paragraph.appendChild(nick_background);
    comment_paragraph.appendChild(space);
    comment_paragraph.appendChild(comm1);
    document.getElementById("comments").appendChild(comment_paragraph);
}
