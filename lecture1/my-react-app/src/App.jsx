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
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* xs: 전체너비 / sm: 540px / md: 720px */}
      <Container maxWidth='md' disableGutters>
        <Box
          sx={{
            background: 'white',
            borderRadius: { xs: '16px', sm: '20px' },
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 4, sm: 5, md: 7 },
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          {/* 이모지 */}
          <Typography
            sx={{
              fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
              mb: { xs: 1.5, md: 2 },
              lineHeight: 1,
            }}
          >
            🚀
          </Typography>

          {/* 제목 */}
          <Typography
            variant='h4'
            component='h1'
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem' },
              lineHeight: 1.3,
            }}
          >
            성장하는 개발자 000입니다
          </Typography>

          {/* 설명 */}
          <Typography
            sx={{
              color: '#666',
              lineHeight: 1.7,
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
            }}
          >
            AI와 함께하는 즐거운 웹 개발 여정에 오신 것을 환영합니다.
            <br />
            React, MUI, GitHub Actions로 멋진 웹을 만들어 나가고 있습니다.
          </Typography>

          {/* 기술 스택 Chip */}
          <Box
            sx={{
              mb: { xs: 3, md: 4 },
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size='small'
                sx={{
                  background: `linear-gradient(135deg, ${BRAND_COLOR}, ${BRAND_COLOR_DARK})`,
                  color: 'white',
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                  height: { xs: 28, md: 32 },
                }}
              />
            ))}
          </Box>

          {/* 버튼 섹션: 모바일=세로 / 태블릿·데스크탑=가로 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            {projectLinks.map((link) => (
              <Button
                key={link.label}
                variant='outlined'
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                fullWidth={false}
                sx={{
                  color: BRAND_COLOR,
                  borderColor: BRAND_COLOR,
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.8, md: 1 },
                  width: { xs: '100%', sm: 'auto' },
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

          {/* 하단 텍스트 */}
          <Typography
            sx={{
              color: '#bbb',
              fontSize: { xs: '0.78rem', md: '0.85rem' },
              mt: { xs: 3, md: 4 },
            }}
          >
            🌟 Claude Code와 함께 개발 중
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
