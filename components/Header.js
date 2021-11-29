import { useRouter } from 'next/router';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const routerList = [
  { name: 'main', path: '/' },
  { name: 'test', path: '/app/test' },
  { name: 'test2', path: '/app/test2' }
];

export default function Header() {
  const router = useRouter();

  const changeRoute = e => {
    router.push(e.target.value);
  };

  return (
    <Box sx={{ p: 1, borderBottom: '1px solid grey' }}>
      <Select
        sx={{ minWidth: 150 }}
        labelId="app"
        name="app"
        value={router.pathname}
        onChange={changeRoute}
      >
        {routerList.map(({ name, path }) => {
          return (
            <MenuItem key={name} value={path}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}
