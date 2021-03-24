import React from "react";
import { Personal } from "../../typings";
import styled, { css } from "styled-components/macro";

const StyledProfile = styled.img`
  ${({ theme }) => css`
    border-radius: 150px;
    margin-bottom: ${theme.ruler[3]}px;
    display: block;
  `}
`;

interface ProfileProps {
  data: Personal;
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.ruler[8]}px;
    display: block;
  `}
`;

const SkillList = styled.ul`
  padding-left: 0px;
`;

const Name = styled.h1`
  text-transform: capitalize;
  font-weight: 100;
  margin-bottom: 0px;
`;

const JobTitle = styled.h2`
  ${({ theme }) => css`
    text-transform: capitalize;
    color: ${theme.colors.darkGrey};
    margin-top: 10px;
    border-bottom: solid 1px ${theme.colors.darkGrey};
    padding-bottom: ${theme.ruler[5]}px;
  `}
`;

const Question = styled.h3`
  text-transform: capitalize;
  margin-bottom: 0px;
`;

const Answer = styled.p`
  ${({ theme }) => css`
    text-transform: capitalize;
    margin-top: 10px;
    margin-bottom: 30px;
    color: ${theme.colors.darkGrey};
  `}
`;

const Skill = styled.li<{ hasSkill: boolean }>`
  ${({ hasSkill, theme }) => css`
    margin-left: 0px;
    margin-top: 10px;
    text-transform: capitalize;
    color: ${theme.colors.darkGrey};
    list-style: none;
    margin-bottom: 5px;

    ${hasSkill &&
    css`
      &:after {
        content: " - liar";
      }
    `}
  `}
`;

const Profile: React.FC<ProfileProps> = ({ data }) => {
  let { skills, name, favouriteFood, nationality, jobTitle } = data;
  debugger;
  return (
    <Wrapper>
      <StyledProfile src={data.image} />
      <Name data-testid={`profile-name-${name}`}>{name}</Name>
      <JobTitle>{jobTitle}</JobTitle>
      <Question>Favorite Food</Question>
      <Answer>{favouriteFood}</Answer>

      <Question>Nationality</Question>
      <Answer>{nationality}</Answer>

      <Question>Skills</Question>
      <SkillList>
        {skills.map((skill) => {
          return (
            <Skill key={skill.id} hasSkill={skill.value}>
              {skill.name}
            </Skill>
          );
        })}
      </SkillList>
    </Wrapper>
  );
};

export default Profile;
