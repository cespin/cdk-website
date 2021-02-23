#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWebsiteStack } from '../lib/cdk-website-stack';

const app = new cdk.App();
new CdkWebsiteStack(app, 'CdkWebsiteStack');
