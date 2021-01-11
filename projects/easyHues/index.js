import { Project } from 'components/Project';

export default function EasyHues() {
  return (
    <Project
      classNames="text-purple-100 bg-purple-800"
      title="Easy hues"
      description="Ever wasted time on picking color palette for your website? Now you don’t have to. Pick from professional grade palettes that are tested and works for every kind of website."
      images={
        <div>
          <div>
            <div className="flex items-center justify-center mb-4 space-x-4">
              <img src="/img/easyHues/color.svg" alt="color palette" className="flex-shrink-0" />
              <img
                src="/img/easyHues/selected-color.svg"
                alt="color palette selected"
                className="flex-shrink-0"
              />
              <img src="/img/easyHues/color.svg" alt="color palette" className="flex-shrink-0" />
              <img
                src="/img/easyHues/color.svg"
                alt="color palette"
                className="flex-shrink-0 hidden sm:block"
              />
              <img
                src="/img/easyHues/color.svg"
                alt="color palette"
                className="flex-shrink-0 hidden sm:block"
              />
            </div>
            <img
              src="/img/easyHues/easy-hues-mobile.svg"
              alt="Screenshot of easy hues"
              className="mx-auto shadow-lg sm:hidden"
            />
            <img
              src="/img/easyHues/easy-hues.svg"
              alt="Screenshot of easy hues"
              className="hidden shadow-lg sm:block"
            />
          </div>
        </div>
      }
      frameworks={['React', 'Sass']}
    />
  );
}
