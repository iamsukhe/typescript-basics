type Course = {
		uuid: string
		name: string
		url: string
}

type QualificationCourse = {
		courseId: string
		qualificationId: string
		isActive: true | null
}

// Create a type equivalent to the following using ONLY utility types
type QualificationCourseWithCourseData = {
		qualificationId: string
		courseId: string
		isActive: true
		name: string
		url?: string
}

type QualificationCourseWithCourseData1 = Pick<Course & QualificationCourse,  'name' | 'courseId'  | 'qualificationId'> &  Partial<Pick<Course,  'url'>> & { isActive : NonNullable<QualificationCourse['isActive']> } 

const mytest:QualificationCourseWithCourseData1 = {
	qualificationId: 'string',
	courseId: 'string',
	isActive: true,
	name: 'string',
	url: 'string'
}