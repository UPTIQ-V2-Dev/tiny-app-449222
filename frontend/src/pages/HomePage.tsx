import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome!</CardTitle>
          <CardDescription>
            This is the smallest React 19 app with Vite and shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-6xl font-bold text-primary">
            {count}
          </div>
          <div className="flex gap-2 justify-center">
            <Button 
              onClick={() => setCount(count - 1)}
              variant="outline"
            >
              -
            </Button>
            <Button 
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>
          <Button 
            onClick={() => setCount(0)}
            variant="secondary"
            className="w-full"
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};