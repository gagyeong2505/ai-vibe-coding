import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PageContainer from '../components/common/page-container';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const bgZoom = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.05); }
`;

/** grain 오버레이에 사용할 SVG noise 데이터 URL */
const grainSvg = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
  '<filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter>' +
  '<rect width="200" height="200" filter="url(#noise)" opacity="1"/>' +
  '</svg>'
)}`;

function Home() {
  const navigate = useNavigate();

  return (
    <PageContainer
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 배경: 느린 줌인 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F5F0E8',
          animation: `${bgZoom} 12s ease-out forwards`,
          zIndex: 0,
        }}
      />

      {/* grain 오버레이 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${grainSvg}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.12,
          mixBlendMode: 'overlay',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 화이트 그라데이션 오버레이 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.35) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* 콘텐츠 영역 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          px: { xs: 3, md: 4 },
          py: { xs: 8, md: 12 },
        }}
      >
        {/* 메인 타이틀 */}
        <Typography
          component='h1'
          sx={{
            fontWeight: 300,
            letterSpacing: '0.3em',
            fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
            color: '#1E2B3C',
            mb: { xs: 2.5, md: 3 },
            lineHeight: 1.1,
            animation: `${fadeUp} 1.2s ease-out both`,
          }}
        >
          PORTFOLIO
        </Typography>

        {/* 서브 문구 */}
        <Typography
          sx={{
            fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
            color: '#4A4A4A',
            letterSpacing: '0.1em',
            mb: { xs: 6, md: 8 },
            animation: `${fadeIn} 1s ease-out 0.4s both`,
          }}
        >
          노력으로 성장하는 웹 퍼블리셔
        </Typography>

        {/* 프로필 이동 버튼 */}
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-out 0.7s both`,
          }}
        >
          <Button
            onClick={() => navigate('/profile')}
            variant='outlined'
            sx={{
              color: '#4A7C59',
              borderColor: '#4A7C59',
              borderRadius: '50px',
              px: { xs: 3.5, md: 5 },
              py: { xs: 1, md: 1.2 },
              fontSize: { xs: '0.85rem', md: '0.9rem' },
              letterSpacing: '0.12em',
              fontWeight: 400,
              '&:hover': {
                borderColor: '#3A6B42',
                backgroundColor: 'rgba(74,124,89,0.06)',
              },
            }}
          >
            PROFILE 보기
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
}

export default Home;
