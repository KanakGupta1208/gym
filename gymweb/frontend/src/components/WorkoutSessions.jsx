import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Push your limits with our Top Workout Sessions, designed to help you achieve maximum results! Whether you're looking to build strength, improve endurance, or enhance flexibility, we have the perfect workout for you. Our expert trainers guide you through high-intensity routines, strength training, and functional exercises to ensure you get the most out of every session. Join us and transform your fitness journey!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Take your fitness to the next level with our Featured Bootcamps! These intensive, result-driven training programs are designed for all fitness levels, combining strength, agility, and endurance training. From HIIT sessions and weight loss bootcamps to muscle-building challenges, our specialized bootcamps will push you beyond your limits. Get ready to sweat, challenge yourself, and see real progress!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Beast Mode Bootcamp</h4>
            <p>
              High-intensity strength and endurance training for serious fitness enthusiasts.
            </p>
          </div>
          <div>
            <h4>Fat Burn Blitz</h4>
            <p>
            A calorie-torching HIIT bootcamp designed for maximum fat loss.
            </p>
          </div>
          <div>
            <h4>Warrior Fit Challenge</h4>
            <p>
            A full-body functional training bootcamp to build strength and stamina.
            </p>
          </div>
          <div>
            <h4>Athlete’s Edge </h4>
            <p>
              Sports-inspired conditioning workouts to boost agility, speed, and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
