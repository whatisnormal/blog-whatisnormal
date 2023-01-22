import { Article } from "./models";


export const reflections : Article[] = [
  { articleType: 'reflections',
    publishedDate: "2022-11-13"
    ,title: "Reflections", fileName: "reflections", coverImgPath: "https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
intro: "For the past few years, I've been running my own hybrid cloud: some of my software runs in the cloud in servers that I rent from however a lot of my other software (CI nodes, backups, chat applications) is ru...",
tags: ['tests', 'ideas']
},
  {articleType: 'reflections',
    publishedDate: "2022-11-13",
    title: "Reflections2", fileName: "reflections2", coverImgPath: "https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  intro: "For the past few years, I've been running my own hybrid cloud: some of my software runs in the cloud in servers that I rent from however a lot of my other software (CI nodes, backups, chat applications) is ru...",
  tags: ['rants']
},
{articleType: 'reflections',
  publishedDate: "2022-11-13",
  title: "Reflections2", fileName: "reflections3", coverImgPath: "https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
intro: "For the past few years, I've been running my own hybrid cloud: some of my software runs in the cloud in servers that I rent from however a lot of my other software (CI nodes, backups, chat applications) is ru...",
tags: ['rants']
}
];

export const tutorials : Article[] = [
  { articleType: 'tutorials',
    publishedDate: "2022-11-13"
    ,title: "Ang v15 environments", fileName: "ng_v15environments", coverImgPath: "https://images.unsplash.com/photo-1670844686624-91d05f20f245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
intro: "For the past few years, I've been running my own hybrid cloud: some of my software runs in the cloud in servers that I rent from however a lot of my other software (CI nodes, backups, chat applications) is ru...",
tags: ['tests', 'ideas']
}
]

export const articles: Article[] = [...reflections, ...tutorials];
