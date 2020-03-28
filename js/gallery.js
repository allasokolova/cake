// let imageServer = "https://picsum.photos/200/200/?";
// let imageFolder = '../slide/images/cakes/';
let postsCount = 40;         // число картикок
let posts = [];
var str = "Торт"

function initPosts() {
    for (let i = postsCount; i > 0; i--) { 
		//posts.push(new Post("Название поста " + (i+1), imageFolder + i + '.jpg'));
		posts.push(new Post(str + " " + (i), imageFolder + i + '.jpg'));
    }
}

function addPostsToHTML() {
    let gallery = document.getElementById('gallery'); // Метод document.getElementById() возвращает ссылку на элемент, который имеет атрибут id с указанным значением

    for (let post of posts) {
        let divContainer = document.createElement('div'); //Создаёт новый элемент с заданным тегом:
        let postTitle = document.createElement('p');
        let newImage = document.createElement('img');
        postTitle.textContent = post.title;  // предоставляет доступ к тексту внутри
        newImage.src = post.fullImageSrc;
		


        divContainer.appendChild(postTitle); //добавляет узел в качестве последнего дочернего узла в указанный родительский элемент
        divContainer.appendChild(newImage);
        gallery.appendChild(divContainer);
    }
}

initPosts();
addPostsToHTML();
