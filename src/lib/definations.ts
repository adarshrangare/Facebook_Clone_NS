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