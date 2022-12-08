export enum TopLevelCategory{
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageModel {
    _id:             string;
    tags:            string[];
    secondCategory:  string;
    alias:           string;
    title:           string;
    category:        string;
    seoText:         string;
    tagsTitle:       string;
    metaTitle:       string;
    metaDescription: string;
    firstCategory:   number;
    advantages:      TopPageAdvantage[];
    createdAt:       Date;
    updatedAt:       Date;
    hh:              HhData;
    qas:             any[];
    addresses:       any[];
    categoryOn:      string;
    blog:            Blog;
    sravnikus:       Learningclub;
    learningclub:    Learningclub;
}

export interface TopPageAdvantage {
    title:       string;
    description: string;
    _id:         string;
}

export interface Blog {
    h1:              string;
    metaTitle:       string;
    metaDescription: string;
    views:           number;
    _id:             string;
}

export interface HhData {
    count:        number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt:    Date;
    _id:          string;
}

export interface Learningclub {
    metaTitle:       string;
    metaDescription: string;
    qas:             any[];
    _id:             string;
}
