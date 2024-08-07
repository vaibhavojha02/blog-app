import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";

import images from "../../constants/images.js";
import SuggestedArticles from "./container/SuggestedArticles.jsx";
import { Link } from "react-router-dom";
import Commentcontainer from "../../components/comments/Commentcontainer.jsx";

const postsData = [
  {
    _id: "1",
    image: images.articleImage,
    title: "Help children get better education",
    createdAt: "2024-06-17T11:31:42.113+00:00",
  },
  {
    _id: "2",
    image: images.articleImage,
    title: "Help children get better education",
    createdAt: "2024-06-17T11:31:42.113+00:00",
  },
  {
    _id: "3",
    image: images.articleImage,
    title: "Help children get better education",
    createdAt: "2024-06-17T11:31:42.113+00:00",
  },
];

const tagsData = [
  "Medical","Technology","Finance","Entertainment","Music","adult"
]

const ArticleDetail = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-5 max-w-5xl lg:flex lg:gap-x-5 lg:items-start">
        <article className="flex-1 ">
          <BreadCrumbs />
          <img
            src={images.articleImage}
            className="rounded-xl w-full"
            alt="laptop"
          ></img>
          <Link
            to="/blog?category=selectedCategory"
            className="text-sm font-roboto text-primary mt-4 inline-block md:text-base"
          >
           EDUCATION
          </Link>
          
          <h1 className="text-xl font-medium font-roboto  mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Egestas purus viverra accumsan in
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
          <Commentcontainer className = "mt-10" logginedUserId="a"/>
        </article>

        <SuggestedArticles header="Latest Article"  posts = {postsData} tags = {tagsData} classname = "mt-8 lg:mt-0 lg:max-w-xs" />
      </section>
    </MainLayout>
  );
};

export default ArticleDetail;
