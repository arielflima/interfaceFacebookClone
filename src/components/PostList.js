import React, { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Ariel Lima",
          avatar: '../assets/avatar.png'
        },
        date: "04 Oct 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/avatar.png"
            },
            content: "Claro, mas somente os que se destacarem!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "../assets/avatar.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/avatar.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
}

export default PostList;