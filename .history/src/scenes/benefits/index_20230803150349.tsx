import { SelectedPage } from "@/shared/types";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <div
    id="benefits"
    className="mx-auto min-h-full wpy-20"
    >Benefits</div>
  );
}

export default Benefits;