// InputBox

export interface InputBoxProps {
  type?: string;
  placeholder: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: any;
  passwordIconClass?: string;
  id?:string;

}



// SignUp Form
export interface SignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPwd: string;
    gender: string;
  }



  
export interface UserData {
  id?:string;
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  profileImage?: string | null;
  skills?: string[];
  address?: string[];
  paymentDetails?: any[]; // Update this with the correct type if needed
  workExprience?: any[]; // Update this with the correct type if needed
  education?: any[]; // Update this with the correct type if needed
  createdAt?: string;
  __v?: number;
  isFollowed?:boolean;
}

export interface Author {
  _id: string;
  name: string;
  profileImage: string | null;
}

export interface Post {
  _id: string;
  author: Author;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
  isLiked: boolean;
  isDisliked: boolean;
  likeCount: number;
  commentCount: number;
}


export interface User {
  email: string;
  exp: number;
  iat: number;
  id: string;
  image: string;
  jti: string;
  jwt: string;
  name: string;
  profileImage: string | null;
}

export interface Comment {
  _id?: string;
  content?: string;
  author?: string;
  post?: string;
  parentComment?: string | null;
  children?: Comment[];
  isEdited?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  author_details?: UserData | null;
}