{{/*
生成应用名称
*/}}
{{- define "gamemac.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
生成完整名称
*/}}
{{- define "gamemac.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
生成 chart 标签
*/}}
{{- define "gamemac.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
通用标签
*/}}
{{- define "gamemac.labels" -}}
helm.sh/chart: {{ include "gamemac.chart" . }}
{{ include "gamemac.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
选择器标签
*/}}
{{- define "gamemac.selectorLabels" -}}
app.kubernetes.io/name: {{ include "gamemac.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

