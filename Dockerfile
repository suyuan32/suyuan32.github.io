FROM nginx:1.25.2-alpine

COPY /src/.vuepress/dist/ /usr/share/nginx/html/

LABEL MAINTAINER="RyanSU@yuansu.china.work@gmail.com"

EXPOSE 80
