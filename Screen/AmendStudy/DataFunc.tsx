// 카테고리
export const studyCategory = (category: []) => {
  const categoryList = category.map(({ studyCategory }: any) => {
    return studyCategory.InterestId - 1;
  });
  return categoryList;
};

// 모집대상
export const studyTarget = (target: []) => {
  const targetList = target.map(({ studyTarget }: any) => {
    return studyTarget.StateId;
  });
  return targetList;
};

// 활동지역
export const studyRegion = (region: []) => {
  const regionList = region.map(({ studyRegion }: any) => {
    return studyRegion.RegionId - 1;
  });
  return regionList;
};

// 모집마감 날짜
export const studyEndDate = (endDate: string) => {
  const date = endDate.substring(0, 10).split('-');
  return date[0] + '년 ' + date[1] + '월 ' + date[2] + '일';
};

// 모집인원 무관일때 확인
export const checkRecruitNum = (num: string) => {
  return num == '0';
};
