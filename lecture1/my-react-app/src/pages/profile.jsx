import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import PageContainer from '../components/common/page-container';
import InfoList from '../components/ui/info-list';
import { awards, careers, certificates, tools } from '../utils/profile-data';

function Profile() {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <PageContainer>
      <Container maxWidth='lg' sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, md: 3 } }}>

        {/* 뒤로가기 버튼 */}
        <Button
          onClick={() => navigate('/')}
          variant='text'
          sx={{
            color: '#4A7C59',
            mb: { xs: 3, md: 4 },
            pl: 0,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            '&:hover': { backgroundColor: 'transparent', color: '#3A6B42' },
          }}
        >
          ← HOME
        </Button>

        <Grid container spacing={{ xs: 4, md: 6 }}>

          {/* 좌측: 프로필 사진 + 개인정보 */}
          <Grid size={{ xs: 12, md: 4 }}>

            {/* 프로필 사진 영역
                사용 방법:
                1. public/ 폴더에 이미지 파일을 넣어주세요 (예: public/profile.jpg)
                2. 아래 src 경로를 해당 파일명으로 변경해주세요
                3. React import 없이 public 경로를 직접 사용합니다 */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '12px',
                overflow: 'hidden',
                mb: 3,
                border: '1px solid #C4A96B',
                backgroundColor: '#EDE8DF',
              }}
            >
              { !imgError && (
                <Box
                  component='img'
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt='프로필 사진'
                  onError={() => setImgError(true)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              ) }
              { imgError && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '2rem' }}>📷</Typography>
                  <Typography sx={{ color: '#6B6B6B', fontSize: '0.82rem', textAlign: 'center', px: 2 }}>
                    사진을 추가해주세요
                  </Typography>
                  <Typography sx={{ color: '#8A8880', fontSize: '0.75rem', textAlign: 'center', px: 2 }}>
                    public/profile.jpg
                  </Typography>
                </Box>
              ) }
            </Box>

            {/* 개인정보 */}
            <Stack spacing={1.5}>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: 600,
                  color: '#1E2B3C',
                  fontSize: { xs: '1.4rem', md: '1.55rem' },
                }}
              >
                김가경
              </Typography>
              <Typography
                sx={{
                  color: '#4A4A4A',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                노력으로 성장하는 웹 퍼블리셔
              </Typography>
              <Divider sx={{ borderColor: '#C4A96B', my: 0.5 }} />
              <Stack spacing={0.8}>
                <Typography sx={{ color: '#6B6B6B', fontSize: '0.88rem' }}>
                  📧 gagyeong2505@naver.com
                </Typography>
                <Typography sx={{ color: '#6B6B6B', fontSize: '0.88rem' }}>
                  🔗 github.com/username
                </Typography>
                <Typography sx={{ color: '#6B6B6B', fontSize: '0.88rem' }}>
                  💼 velog.io/@username
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* 우측: 수상 / 경력 / 자격 / 툴 */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={3}>

              {/* 수상 */}
              <InfoList
                title='수상'
                items={awards}
                renderItem={(item, index) => (
                  <Box key={index}>
                    <Typography sx={{ color: '#1E2B3C', fontSize: '0.95rem', fontWeight: 500 }}>
                      { item.title }
                    </Typography>
                    <Typography sx={{ color: '#6B6B6B', fontSize: '0.85rem', mt: 0.3 }}>
                      { item.year } · { item.desc }
                    </Typography>
                  </Box>
                )}
              />

              {/* 경력 */}
              <InfoList
                title='경력'
                items={careers}
                renderItem={(item, index) => (
                  <Box key={index}>
                    <Typography sx={{ color: '#1E2B3C', fontSize: '0.95rem', fontWeight: 500 }}>
                      { item.company } — { item.role }
                    </Typography>
                    <Typography sx={{ color: '#6B6B6B', fontSize: '0.85rem', mt: 0.3 }}>
                      { item.period }
                    </Typography>
                  </Box>
                )}
              />

              {/* 자격사항 */}
              <InfoList
                title='자격사항'
                items={certificates}
                renderItem={(item, index) => (
                  <Box key={index}>
                    <Typography sx={{ color: '#1E2B3C', fontSize: '0.95rem', fontWeight: 500 }}>
                      { item.name }
                    </Typography>
                    <Typography sx={{ color: '#6B6B6B', fontSize: '0.85rem', mt: 0.3 }}>
                      { item.year } · { item.issuer }
                    </Typography>
                  </Box>
                )}
              />

              {/* 사용 가능한 툴 */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: '#EDE8DF',
                  borderRadius: '12px',
                  border: '1px solid #C4A96B',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 600,
                    color: '#1E2B3C',
                    mb: 2,
                    fontSize: '1rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  사용 가능한 툴
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  { tools.map((tool) => (
                    <Box
                      key={tool}
                      sx={{
                        px: 2,
                        py: 0.6,
                        borderRadius: '50px',
                        border: '1px solid #4A7C59',
                        color: '#4A7C59',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                      }}
                    >
                      { tool }
                    </Box>
                  )) }
                </Box>
              </Paper>

            </Stack>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
}

export default Profile;
