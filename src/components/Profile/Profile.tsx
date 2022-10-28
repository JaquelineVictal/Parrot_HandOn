import { ProfilePicture } from "./Profile.style"

type ProfileProps = {
  src:string;
}

export function Profile(props: ProfileProps) {
  return (
    <ProfilePicture src={props.src} />
  )
}