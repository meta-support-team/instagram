
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleFacebookLogin = () => {
    window.location.href = '#';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        <Card className="border border-gray-300 bg-white p-10 mb-2">
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/654b5419-17cc-4ad2-b7e3-54b4ec776c93.png" 
              alt="Instagram" 
              className="mx-auto mb-8 h-12"
            />
            {isSignUp && (
              <p className="text-gray-500 text-sm font-semibold mb-6">
                Sign up to see photos and videos<br />
                from your friends.
              </p>
            )}
          </div>

          {isSignUp ? (
            <div className="space-y-3">
              <Button 
                onClick={handleFacebookLogin}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                📘 Log in with Facebook
              </Button>
              
              <div className="flex items-center my-4">
                <Separator className="flex-1" />
                <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
                <Separator className="flex-1" />
              </div>

              <Input
                type="text"
                placeholder="Mobile Number or Email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />
              <Input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />
              <Input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />

              <p className="text-xs text-gray-500 text-center my-4 leading-4">
                People who use our service may have uploaded your contact information to Instagram.{' '}
                <a href="#" className="text-blue-900 font-semibold">Learn More</a>
              </p>

              <p className="text-xs text-gray-500 text-center mb-4 leading-4">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-900 font-semibold">Terms</a>,{' '}
                <a href="#" className="text-blue-900 font-semibold">Privacy Policy</a> and{' '}
                <a href="#" className="text-blue-900 font-semibold">Cookies Policy</a>.
              </p>

              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Sign up
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Phone number, username, or email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />
              <Input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 focus:bg-white focus:border-gray-400"
              />

              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Log in
              </Button>

              <div className="flex items-center my-4">
                <Separator className="flex-1" />
                <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
                <Separator className="flex-1" />
              </div>

              <Button 
                onClick={handleFacebookLogin}
                variant="ghost"
                className="w-full text-blue-900 font-semibold text-sm hover:bg-gray-50"
              >
                📘 Log in with Facebook
              </Button>

              <div className="text-center mt-4">
                <a href="#" className="text-blue-900 text-xs">Forgot password?</a>
              </div>
            </div>
          )}
        </Card>

        <Card className="border border-gray-300 bg-white p-6 text-center">
          <p className="text-sm">
            {isSignUp ? "Have an account? " : "Don't have an account? "}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 font-semibold hover:underline"
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </p>
        </Card>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 mb-4">Get the app.</p>
          <div className="flex justify-center space-x-2">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Download on the App Store" className="h-10" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Get it on Google Play" className="h-10" />
          </div>
        </div>

        <footer className="mt-12 text-center">
          <div className="flex flex-wrap justify-center text-xs text-gray-500 space-x-4 mb-4">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Instagram Lite</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
            <a href="#" className="hover:underline">Meta Verified</a>
          </div>
          <div className="text-xs text-gray-500">
            <span>English</span>
            <span className="mx-2">© 2025 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
