import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BRAND_COLOR = '#339af0';
const BRAND_COLOR_DARK = '#1c7ed6';

const techStack = ['React', 'MUI', 'Vite', 'GitHub Actions'];

const projectLinks = [
  { label: 'GitHub 방문하기', href: 'https://github.com/gagyeong2505' },
  { label: '프로젝트 1', href: 'https://github.com/gagyeong2505/ai-vibe-coding' },
  { label: '프로젝트 2', href: 'https://github.com/gagyeong2505/ai-vibe-coding' },
];

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, ${BRAND_COLOR_DARK} 100%)`,
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth='sm'>
        <Box
          sx={{
            background: 'white',
            borderRadius: '20px',
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          <Typography sx={{ fontSize: '4rem', mb: 2, lineHeight: 1 }}>🚀</Typography>

          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            성장하는 개발자 000입니다
          </Typography>

          <Typography sx={{ color: '#666', lineHeight: 1.7, mb: 3, fontSize: '1rem' }}>
            AI와 함께하는 즐거운 웹 개발 여정에 오신 것을 환영합니다.
            <br />
            React, MUI, GitHub Actions로 멋진 웹을 만들어 나가고 있습니다.
          </Typography>

          <Box sx={{ mb: 4 }}>
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  m: 0.5,
                  background: `linear-gradient(135deg, ${BRAND_COLOR}, ${BRAND_COLOR_DARK})`,
                  color: 'white',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {projectLinks.map((link) => (
              <Button
                key={link.label}
                variant='outlined'
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: BRAND_COLOR,
                  borderColor: BRAND_COLOR,
                  '&:hover': {
                    borderColor: BRAND_COLOR_DARK,
                    backgroundColor: 'rgba(51,154,240,0.08)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Typography sx={{ color: '#999', fontSize: '0.85rem', mt: 3 }}>
            🌟 Claude Code와 함께 개발 중
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
