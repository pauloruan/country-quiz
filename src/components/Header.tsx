import { BarChartOutlined, UserOutlined } from '@ant-design/icons';
import Button from './Button';

function Header() {
  return (
    <header className="flex items-center bg-primary/5 px-3 sm:px-10 md:px-20">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">Country Quiz</h1>
        <p className="text-sm font-bold dark:text-white">
          Test your knowledge about countries
        </p>
      </div>
      <div className="flex h-20 items-center justify-center">
        <Button>
          <BarChartOutlined style={{ fontSize: '1.5rem' }} />
        </Button>
        <Button>
          <UserOutlined style={{ fontSize: '1.5rem' }} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
