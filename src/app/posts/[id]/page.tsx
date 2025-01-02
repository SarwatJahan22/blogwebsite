'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
  {
    id: "1",
    title: "10-Minute Workouts for Busy People",
    description: "Quick and effective exercise routines that can be done at home or during a work break. Include videos or step-by-step instructions.",
    image: "/1.png",
  },
  {
    id: "2",
    title: "Beginner's Guide to Starting a Fitness Journey",
    description: "Tips for people who are new to fitness, including how to set realistic goals, choose a workout plan, and stay motivated.",
    image: "/2.png",
  },
  {
    id: "3",
    title: "The Benefits of Mindfulness in Your Fitness Routine",
    description: "Explore the connection between mental and physical health. Include mindfulness exercises that can complement workouts.",
    image: "/3.png",
  },
  {
    id: "4",
    title: "Top 10 Foods for Muscle Recovery",
    description: "Superfoods and nutrition tips to aid recovery after intense workouts, including recipes or meal prep ideas.",
    image: "/4.png",
  },
  {
    id: "5",
    title: "How to Create a Home Gym on a Budget",
    description: "Tips on setting up a workout space at home using affordable equipment or DIY alternatives.",
    image: "/5.png",
  },
  {
    id: "6",
    title: "The Ultimate Guide to Hydration for Fitness Enthusiasts",
    description: "Hydration is essential, how much water to drink, and the benefits of electrolyte drinks.",
    image: "/6.png",
  },
  {
    id: "7",
    title: "Fitness Challenges You Can Try This Month",
    description: "A 30-day fitness challenge, like planks, push-ups, or step counting, to engage readers and build a community.",
    image: "/7.png",
  },
  {
    id: "8",
    title: "Yoga for Stress Relief: 5 Simple Poses You Can Do Anywhere",
    description: "Easy yoga poses and breathing exercises that help reduce stress and improve flexibility.",
    image: "/8.png",
  },
  {
    id: "9",
    title: "The Science of Rest Days: Why Recovery is Important",
    description: "The importance of rest and how overtraining can negatively impact fitness progress. Offer advice on active recovery.",
    image: "/9.png",
  },
  {
    id: "10",
    title: "How to Stay Fit While Traveling",
    description: "Tips for maintaining fitness routines on the road, including hotel room workouts, packing fitness gear, and finding healthy food options.",
    image: "/10.png",
  },
  {
    id: "11",
    title: "The Role of Mental Health in Physical Fitness",
    description: "Dive into the interplay between mental well-being and staying fit, with tips for managing anxiety, depression, and burnout through exercise.",
    image: "/11.png",
  },
  {
    id: "12",
    title: "The Best Fitness Apps and Gadgets for 2025",
    description: "Popular fitness apps, wearable devices, and gadgets that help track progress and enhance workouts.",
    image: "/12.png",
  },
];

const Post = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className='mb-4 justify-center'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl font-bold text-red-600 text-center'>{post.title}</h1>
      {post.image && (
        <img src={post.image} alt={post.title} className='w-full h-auto mt-4 mx-auto rounded-md' />
      )}
      <div className='mt-6 text-lg text-slate-700'>{renderParagraphs(post.description)}</div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
};

export default Post;
