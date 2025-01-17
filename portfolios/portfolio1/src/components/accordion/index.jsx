import { SingleItem } from "./SingleItem";
import { education, experience } from "./data";

export const Education = () => {
  return (
    <div>
      <div>
        <div>
          {education.map((item) => (
            <SingleItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div>
      <div>
        <div>
          {experience.map((item) => (
            <SingleItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
