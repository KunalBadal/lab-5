// app/page.tsx
"use client"; // Mark this as a client component

import { useEffect, useState } from "react";

// Define the Task type with description
type Task = {
  id: number;
  title: string;
  description: string; // Add description field
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks"); // Fetch from Next.js API
        const data: Task[] = await res.json(); // Ensure API returns description
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            {/* Show both title and description */}
          </li>
        ))}
      </ul>
    </div>
  );
}
