// app/api/tasks/route.ts
export async function GET(request: Request): Promise<Response> {
    // Fetch data from the Express API
    const response = await fetch('http://localhost:3000/api/tasks');
    const tasks = await response.json();
  
    // Return the tasks in JSON format
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  