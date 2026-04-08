import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { CourseCategoriesAdminController } from './controllers/courseCategories/CourseCategoriesAdminController';
import { CourseCategoriesPublicController } from './controllers/courseCategories/CourseCategoriesPublicController';
import { CoursesAdminController } from './controllers/courses/courses.admin.controller';
import { CoursesPublicController } from './controllers/courses/courses.public.controller';
import { CourseSectionsAdminController } from './controllers/courseSection/course.sections.admin.controller';
import { CourseSectionsPublicController } from './controllers/courseSection/course.sections.public.controller';
import { CourseLessonsAdminController } from './controllers/courseLessons/course.lessons.admin.controller';
import { CourseLessonsPublicController } from './controllers/courseLessons/course.lessons.public.controller';
import { CourseLikesAdminController } from './controllers/courseLikes/course.likes.admin.controller';
import { CourseLikesPublicController } from './controllers/courseLikes/course.likes.public.controller';
import { CourseReviewsAdminController } from './controllers/courseReviews/course.reviews.admin.controller';
import { CourseReviewsPublicController } from './controllers/courseReviews/course.reviews.public.controller';
import { PurchasedCourseAdminController } from './controllers/purchasedCourse/purchased.course.admin.controller';
import { PurchasedCoursePublicController } from './controllers/purchasedCourse/purchased.course.public.controller';

import { CourseCategoriesAdminService } from './service/courseCategories/course.categories.admin.service';
import { CourseCategoriesPublicService } from './service/courseCategories/course.categories.public.service';
import { CoursesAdminService } from './service/courses/courses.admin.service';
import { CoursesPublicService } from './service/courses/courses.public.service';
import { CourseSectionsAdminService } from './service/courseSections/course.sections.admin.service';
import { CourseSectionsPublicService } from './service/courseSections/course.sections.public.service';
import { CourseLessonsAdminService } from './service/courseLessons/course.lessons.admin.service';
import { CourseLessonsPublicService } from './service/courseLessons/course.lessons.public.service';
import { CourseLikesAdminService } from './service/courseLikes/course.likes.admin.service';
import { CourseLikesPublicService } from './service/courseLikes/course.likes.public.service';
import { CourseReviewsAdminService } from './service/courseReviews/course.reviews.admin.service';
import { CourseReviewsPublicService } from './service/courseReviews/course.reviews.public.service';
import { PurchasedCourseAdminService } from './service/purchasedCourse/purchased.course.admin.service';
import { PurchasedCoursePublicService } from './service/purchasedCourse/purchased.course.public.service';

@Module({
  imports: [JwtModule],
  controllers: [
    CourseCategoriesAdminController,
    CourseCategoriesPublicController,
    CoursesAdminController,
    CoursesPublicController,
    CourseSectionsAdminController,
    CourseSectionsPublicController,
    CourseLessonsAdminController,
    CourseLessonsPublicController,
    CourseLikesAdminController,
    CourseLikesPublicController,
    CourseReviewsAdminController,
    CourseReviewsPublicController,
    PurchasedCourseAdminController,
    PurchasedCoursePublicController,
  ],
  providers: [
    CourseCategoriesAdminService,
    CourseCategoriesPublicService,
    CoursesAdminService,
    CoursesPublicService,
    CourseSectionsAdminService,
    CourseSectionsPublicService,
    CourseLessonsAdminService,
    CourseLessonsPublicService,
    CourseLikesAdminService,
    CourseLikesPublicService,
    CourseReviewsAdminService,
    CourseReviewsPublicService,
    PurchasedCourseAdminService,
    PurchasedCoursePublicService,
  ],
})
export class CourseModule {}
