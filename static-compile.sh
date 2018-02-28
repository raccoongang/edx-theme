#!/bin/bash

if [ $1 == start ]
  then
    cp lms/static/css/lms-course-rtl.css lms/static/css/time-lms-course-rtl.css
    cp lms/static/css/lms-course.css lms/static/css/time-lms-course.css
    cp lms/static/css/lms-main-v1-rtl.css lms/static/css/time-lms-main-v1-rtl.css
    cp lms/static/css/lms-main-v1.css lms/static/css/time-lms-main-v1.css
    cd lms/static
    sass --watch sass/lms-main-v1.scss:css/lms-main-v1.css sass/lms-main-v1-rtl.scss:css/lms-main-v1-rtl.css sass/lms-course.scss:css/lms-course.css sass/lms-course-rtl.scss:css/lms-course-rtl.css
fi

if [ $1 == end ]
  then
    rm lms/static/css/time-lms-course-rtl.css
    rm lms/static/css/time-lms-course.css
    rm lms/static/css/time-lms-main-v1-rtl.css
    rm lms/static/css/time-lms-main-v1.css
fi