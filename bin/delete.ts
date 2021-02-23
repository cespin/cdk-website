#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { DeleteStack } from '../lib/delete-stack';

const app = new cdk.App();
new DeleteStack(app, 'DeleteStack');
