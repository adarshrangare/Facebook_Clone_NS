export const baseURL = `https://academics.newtonschool.co/api/v1/facebook`;


export const facebookLogo: string =
  "https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg";

export const languagesName = [
  "English (UK)",
  "हिन्दी",
  "मराठी",
  "اردو",
  "ਪੰਜਾਬੀ",
  "বাংলা",
  "ગુજરાતી",
  "தமிழ்",
  "తెలుగు",
  "മലയാളം",
  "ಕನ್ನಡ",
];

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};
export const validatePassword = (password: string) => {
  return passwordRegex.test(password);
};

export const logos = {
  photos: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png",
  live: "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/hk5Kx2QFmmk.png",
  emoji: "https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/2qUC865ACHv.png",
  like: `data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E`,
  comment: `https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/GAaxJlSQY0r.png`,
};

export const adData = [
  
  {
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/3c7a9d197064595.Y3JvcCw2NTYsNTEzLDM4NCww.jpg",
    text: "See Goibibo Clone Project",
    link: "goibibo-clone-new.vercel.app/",
  },
  {
    img: "https://avatars.githubusercontent.com/u/14923323?v=4",
    text: "Visit and Follow My Github Profile ",
    link: "github.com/adarshrangare",
  },
];


export const menubarItems = [
  {
    title: "Pages",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -115px" 
  },
  {
    title: "Friends",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0px -259px"
  },
  {
    title: "Groups",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -39px" // Adjust this according to your needs
  },
  {
    title: "Memories",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -408px" // Adjust this according to your needs
  },
  {
    title: "Saved",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -149px" // Adjust this according to your needs
  },
  {
    title: "Liked Posts",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 0" // Adjust this according to your needs
  },
  {
    title: "Play Games",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -74px" // Adjust this according to your needs
  },
  {
    title: "Videos",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -482px" // Adjust this according to your needs
  },
  {
    title: "Rewards",
    imageLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png",
    bgPosition: "0 -446px" // Adjust this according to your needs
  }
];


export const aboutIcons = {
  skills:"https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/5tbk93Za84D.png",
  work : "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/XF1fUskiRxe.png",
  education : "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/vGSgEwj4UxE.png",
  address : "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/Uz5t6xIYc84.png",
  email : "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/vKPF8R4VXuJ.png",
  joined:"https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/olD6qzqyixJ.png"
}