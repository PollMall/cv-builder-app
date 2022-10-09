import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import SimpleField from './SimpleField/SimpleField';
import type { PersonalInfo, Cv } from '../../types';

type CvPagePersonalInfoSectionProps = {
  fullName: PersonalInfo['fullName'];
  email: PersonalInfo['email'];
  phone: PersonalInfo['phone'];
  address: PersonalInfo['address'];
  websites: PersonalInfo['websites'];
  about: PersonalInfo['about'];
  languages: Cv['languages'];
  editComponents: Record<string, ReactNode>;
};

export const CvPageBasicInfoSection = ({
  fullName,
  email,
  phone,
  address,
  websites,
  about,
  languages,
  editComponents,
}: CvPagePersonalInfoSectionProps) => {
  return (
    <Box boxSizing="border-box" width="27vw" paddingLeft={5}>
      <SimpleField title="Name" fieldName="fullName" info={fullName} editComponent={editComponents.fullName} />
      <SimpleField title="Email" fieldName="email" info={email} editComponent={editComponents.email} />
      <SimpleField title="Phone" fieldName="phone" info={phone} editComponent={editComponents.phone} />
      <SimpleField title="Address" fieldName="address" info={address} editComponent={editComponents.address} />
      <SimpleField title="Websites" fieldName="websites" info={websites} editComponent={editComponents.websites} />
      <SimpleField title="About me" fieldName="about" info={about} editComponent={editComponents.about} />
      <SimpleField title="Languages" fieldName="languages" info={languages} editComponent={editComponents.languages} />
    </Box>
  );
};
