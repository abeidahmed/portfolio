import { Project } from 'components/Project';

export default function RailsHeroicon() {
  return (
    <Project
      classNames="bg-purple-600 text-purple-100"
      title="Rails heroicon"
      description="Ruby on Rails views helpers for the awesome heroicons by Steve Schoger."
      images={
        <img
          src="/img/railsHeroicon/rails-heroicon.svg"
          alt="Screenshot of rails heroicon"
          className="mx-auto"
        />
      }
      frameworks={['Ruby']}
      githubLink="https://github.com/abeidahmed/rails-heroicon"
      liveLink="https://rubygems.org/gems/rails_heroicon"
    />
  );
}
